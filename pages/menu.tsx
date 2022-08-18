import { css, Global } from '@emotion/react';
import { useState } from 'react';
// import default react-pdf entry
import { Document, Page, pdfjs } from 'react-pdf';
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
// @ts-expect-error ts-migrate(2339)
import workerSrc from '../pdf-worker';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
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

            .react-pdf__Document {
              background-color: #f8f8f8;
            }

            .react-pdf__Page {
              display: flex;
              justify-content: center;
            }
          `}
        />
        <Document
          file="./files/menukaart-hx-hoogcruts-DEF.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
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
