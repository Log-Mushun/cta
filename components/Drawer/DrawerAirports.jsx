import React, { useTransition } from 'react'

function DrawerAirports(props) {
    const transitions = useTransition(props.show, null, {
        from: { position: "fixed", opacity: 0, width: 0 },
        enter: { opacity: 1, width: 320 },
        leave: { opacity: 0, width: 0 }
      });
  return (
    <div>{transitions?.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={{ opacity: props.opacity }}
              className="overlay"
            >
              <animated.div style={{ width: props.width }} className="drawer">
                Hey look it's a side drawer!
              </animated.div>
              <div className="fill" onClick={() => setShow(false)} />
            </animated.div>
          )
      )}</div>
  )
}

export default DrawerAirports