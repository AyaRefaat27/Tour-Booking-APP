import React from "react";
import ImagesGallery from "./imagesGallery";

export default function Modal() {
  return (
    <div
      class="modal fade modal-dialog modal-dialog-centered"
      id="imageGallary"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ImagesGallery />
          </div>
        </div>
      </div>
    </div>
  );
}
