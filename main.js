function onMove(event) {
    throttlePositionElement.textContent = `x: ${event.clientX}, y: ${
      event.clientY
    }`;
  }
  
  function onMoveRealtime(event) {
    realtimePositionElement.textContent = `x: ${event.clientX}, y: ${
      event.clientY
    }`;
  }
  
  const realtimePositionElement = document.querySelector("#realtime");
  const throttlePositionElement = document.querySelector("#throttle");

  function throttle(func, delay) {
    let isAllowed = true;
    return function() {
      if(!isAllowed) {
        return;
      }

      isAllowed = false;

      func.apply(this, arguments);
      
      setTimeout(() => {
        isAllowed = true;
      }, delay);
    };
  }

const wrapper = throttle(onMove, 1000);

document.addEventListener("mousemove", onMoveRealtime);
document.addEventListener("mousemove", wrapper);
