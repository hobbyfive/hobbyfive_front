import React from 'react';

import './Modal.css'

const FilterModal = ({closeFilterModal}) => {
    return (
        <div class="modal custom-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" onClick={closeFilterModal}>
                        <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" onClick={closeFilterModal}>Close</button>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default FilterModal;