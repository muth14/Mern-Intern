// const Content = () => {
//     return (
//         <div>
//         <div>
//            <h1>Content</h1>
//            <p>Welcome to  the content page</p>
//         </div>
       
        

//         </div>
//     );
// };

// export default Content;

// export const Comp1 = () =>{
//     return(
//         <div> <p> Component 1</p></div>
//     );
// };


// export function Comp2() {
//   return (
//     <div>Content</div>
//   );
// };


// export function Comp3() {
//   return (
//     <div>Content</div>
//   );
// };


// export function Comp4() {
//     return (
//       <div>Content</div>
//     )
//   }
  
 
  
// export function Comp5() {
//     return (
//       <div>Content</div>
//     )
//   }

import React from "react";
import "./Main.css";

const Content = () => {
  return (
    <main className="container" style={{ marginTop: "70px" }}>
      <p className="display-6 text-white">Simple blog site</p>
      <section className="row d-flex justify-content-center">
        {Array.from({ length: 10 }).map((_, index) => (
          <section
            key={index}
            className="col-md-6 col-sm-12 col-lg-4 d-flex justify-content-center justify-content-md-between my-2"
          >
            <div className="card">
              <img
                className="image-fluid rounded"
                src="https://picsum.photos/300/200"
                alt=""
              />
              <div className="card-body">
                <div>
                  <p>Post number {index + 1}</p>
                  <p>Created at Jan</p>
                  <p>Details about the post ......</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>

      <section>
        <form action="" className="form-control d-flex flex-column align-items-center gap-4">
          <div className="form-group">
            <label htmlFor="mail">Email</label>
            <input type="text" id="mail" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default Content;

