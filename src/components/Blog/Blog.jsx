import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfFile from './PdfFile';

const Blogs = () => {
return (
<div className='container px-5 md:px-36'>
<div className='p-5 md:p-10 py-10 md:py-16'>
<div className='text-end mb-3'>
<PDFDownloadLink document={<PdfFile></PdfFile>} fileName='blogs'>
<button className="btn btn-outline">Download</button>
</PDFDownloadLink>
</div>
{/* <PdfFile></PdfFile> */}
<div className='row row-cols-1 row-cols-md-2 g-3'>
<div className='col border p-3 md:p-5 rounded-lg bg-pink-100'>
<p className='font-medium'>What is a custom hook, and why will you create a custom hook?</p>
<p className='mt-3'><span className='fw-bold'>Answer:</span> A custom hook is a reusable function that contains a set of logic and stateful operations for a specific task in a React application. Custom hooks allow us to extract common logic from components and share it across multiple components. We create custom hooks to simplify the code, reduce duplication, and improve the application's performance and readability.</p>
</div>
<div className='col border p-3 md:p-5 rounded-lg bg-pink-100'>
<p className='font-medium'>Differences between nodejs and express js?</p>
<p className='mt-3'><span className='fw-bold'>Answer:</span>Node.js is a runtime environment that allows developers to run JavaScript code on the server-side. Express.js is a web framework that is built on top of Node.js. While Node.js provides the basic functionality to run JavaScript code on the server-side, Express.js provides additional features and tools for building web applications, such as routing, middleware, and templates.</p>
</div>
<div className='col border p-3 md:p-5 rounded-lg bg-pink-100'>
<p className='font-medium'>Differences between uncontrolled and controlled components?</p>
<p className=''><span className='fw-bold'>Answer: </span>Controlled components are React components that render form elements whose values are controlled by React state. Uncontrolled components, on the other hand, allow form elements to be controlled by the DOM, and the data is not stored in React state. Controlled components are more flexible, allow for better validation and error handling, but require more code. Uncontrolled components require less code but are less flexible.</p>
</div>
<div className='col border p-3 md:p-5 rounded-lg bg-pink-100'>
<p className='font-medium'>How to validate React props using PropTypes?</p>
<p className=''><span className='fw-bold'>Answer:</span>PropTypes is a library that is built into React and is used to validate the type and shape of props passed to a component. PropTypes allows developers to specify the type and shape of the props a component expects, and if the props do not match the expected type or shape, a warning will be logged to the console. To use PropTypes, import the library and add a propTypes property to the component with the expected type and shape of the props.</p>
</div>
</div>
</div>
</div>
);
};

export default Blogs;