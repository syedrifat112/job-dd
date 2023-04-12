import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-20'>
      <div >
      <div className="text-center my-8 bg-zinc-200  shadow-lg shadow-zinc-500/50 py-8 rounded mx-5 px-3"><p className="font-semibold text-2xl">Question: When should you use context API?</p><p className="mt-3 text-lg">Answer:It used to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. </p></div>
      <div className="text-center my-8 bg-zinc-200  shadow-lg shadow-zinc-500/50 py-8 rounded mx-5 px-3"><p className="font-semibold text-2xl">Question:What is a custom hook?</p><p className="mt-3 text-lg">Answer:A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks</p></div>
      <div className="text-center my-8 bg-zinc-200 shadow-lg shadow-zinc-500/50 py-8 rounded mx-5 px-3"><p className="font-semibold text-2xl">Question: What is useRef?!</p><p className="mt-3 text-lg">Answer: The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument  initialValue .</p></div>
      <div className="text-center my-8 bg-zinc-200 shadow-lg shadow-zinc-500/50 py-8 rounded mx-5 px-3"><p className="font-semibold text-2xl">Question: What is useMemo?</p><p className="mt-3 text-lg">Answer: useMemo is a hook that is used in the functional component of React that returns a memoized valueThe basic purpose of the useMemo hook is related to the fact that we try to avoid the unnecessary re-rendering of components and props in our program..</p></div>
      </div>
    </div>
    );
};

export default Blogs;