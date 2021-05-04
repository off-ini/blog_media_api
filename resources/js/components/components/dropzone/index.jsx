import React from 'react'
import DropzoneComponent from 'react-dropzone-component';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import "dropzone/dist/min/dropzone.min.css";
var ReactDOMServer = require('react-dom/server');

const DropZone = ({handleFile, removeFile, acceptFile, message, maxFile}) => {
    let eventHandlers = {
            addedfile: (file) => handleFile(file),
            removedfile: (file) => removeFile(file)
    }

    let componentConfig = {
        iconFiletypes: acceptFile == null ? ['.jpg', '.png', '.gif'] : acceptFile.split(','),
        showFiletypeIcon: false,
        postUrl: 'no-url'
    };

    let dropzoneConfig = {
        acceptedFiles: acceptFile == null ? ".jpeg,.jpg,.png,.gif" : acceptFile,
        dictDefaultMessage: message == null ? "Glisser déposer des images" : message,
        autoProcessQueue: false,
        thumbnailHeight: 160,
        maxFilesize: 50,
        maxFiles: maxFile != null ? maxFile : 10,
        previewTemplate: ReactDOMServer.renderToStaticMarkup(
          <div className="dz-preview dz-file-preview mb-3">
            <div className="d-flex flex-row ">
              <div className="p-0 w-30 position-relative">
                <div className="preview-container">
                  {/*  eslint-disable-next-line jsx-a11y/alt-text */}
                  <img data-dz-thumbnail className="img-thumbnail border-0" width={50} height={60} />
                  <i className="simple-icon-doc preview-icon" />
                </div>
              </div>
            </div>
            <a href="#/" className="remove" data-dz-remove>
                <IconButton  aria-label="deleted" style={{color: 'rgba(100, 100, 100, 0.54)'}}>
                    <DeleteIcon />
                </IconButton>
            </a>
          </div>
        ),
        headers: { "My-Awesome-Header": "header value" }
      };

    return (
      <>
        <DropzoneComponent
            config={componentConfig}
            eventHandlers={eventHandlers}
            djsConfig={dropzoneConfig}
        />
      </>
    )
}

export default DropZone;
