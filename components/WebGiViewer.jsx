'use client'

import React, {
    useRef,
    useState, useEffect,
    useCallback,
    forwardRef,
    useImperativeHandle
} from 'react'
import { ViewerApp, 
    AssetManagerPlugin, 
    GBufferPlugin, 
    ProgressivePlugin, 
    TonemapPlugin, 
    SSRPlugin, SSAOPlugin, 
    BloomPlugin, 
    GammaCorrectionPlugin, 
    mobileAndTabletCheck } from 'webgi'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// custom component to controll animation
import { scrollAnimation } from '@/lib/scroll-animation';

gsap.registerPlugin(ScrollTrigger);

function WebGiViewer() {
    const canvasRef = useRef(null);
    if (typeof window !== 'undefined') {
    
        //memoized animation based on position, saves in cache the result of scroll animation
        const memoizedScrollAnimation = useCallback(
            (position, target, onUpdate) => {
                if(position && target && onUpdate){
                    scrollAnimation(position, target, onUpdate);
                }
            }, []
        )
    
        //Creates a viewer and stablishes the canvas where it will be rendered
        const setupViewer = useCallback(async () => {
            const viewer = new ViewerApp({
                canvas: canvasRef.current
            });
    
            // first configure our manager before continuing with the configuration
            const manager = await viewer.addPlugin(AssetManagerPlugin);
    
            const camera = viewer.scene.activeCamera;
            const position = camera.position;
            const target = camera.target;
    
            await viewer.addPlugin(GBufferPlugin);        
            // Tonemap allows us to remove the background of the model
            await viewer.addPlugin(new TonemapPlugin(true));
            await viewer.addPlugin(new ProgressivePlugin(32));
            await viewer.addPlugin(GammaCorrectionPlugin);
            await viewer.addPlugin(SSRPlugin);
            await viewer.addPlugin(SSAOPlugin);
            await viewer.addPlugin(BloomPlugin);
    
            viewer.renderer.refreshPipeline();
    
            //import model
            await manager.addFromPath("banda.glb");
            //removes background
            viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
            //disable controns so users can't zoom in/our or rotate our model with the mouse
            viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
            //always start page on top
            window.scrollTo(0, 0);
    
            let needsUpdate = true;
    
            const onUpdate = () => {
                needsUpdate = true;
                viewer.setDirty();
            }
    
            viewer.addEventListener("preFrame", () => {
                if (needsUpdate) {
                    camera.positionTargetUpdated(true);
                    needsUpdate = false;
                }
            });
    
            memoizedScrollAnimation(position, target, onUpdate);
    
        }, []);
    
        useEffect(() => {
            setupViewer();
        }, [])
      }
    return (
        <div className='fixed inset-0 w-full h-full z-0'>
            <canvas className='w-[100%]' ref={canvasRef} />
        </div>
    )
}

export default WebGiViewer;