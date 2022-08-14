import { css, Global } from '@emotion/react';
import { useState } from 'react';
// import default react-pdf entry
import { Document, Page, pdfjs } from 'react-pdf';
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
// @ts-expect-error ts-migrate(2339)
import workerSrc from '../pdf-worker';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
  const [file, setFile] = useState('./files/menukaart-hx-hoogcruts-DEF.pdf');
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <div>
        <Global
          styles={css`
            body {
              margin: 0;
            }
          `}
        />
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {/* @ts-expect-error null accepted */}
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
