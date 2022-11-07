import React from "react";
 
function LoginModal(props) {
 
function closeLoginModal() {
    props.closeLoginModal();
  }
 
  return (
    <div className="Modal" onClick={closeLoginModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeLoginModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}
 
export {LoginModal};
