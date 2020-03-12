import React from 'react';
import '../../assets/styles/modal.css';

function closeModal() {
    //Hide video modal
    document.getElementById("modal").classList.add("hide");
    //Allow body to scroll again
    document.querySelector("body").classList.remove("modal-open");
    //Stop video
    document.getElementById("video").setAttribute("src", "");
}

class Modal extends React.Component {

    render() {
        return(
            <div id="modal" className="hide">
                <div className="modal-content">
                    <button className="close-btn" onClick={closeModal}>&#215;</button>
                    <div className="modal-body">
                        <iframe className="embed-responsive-item" id="video" title="video" src=""></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;