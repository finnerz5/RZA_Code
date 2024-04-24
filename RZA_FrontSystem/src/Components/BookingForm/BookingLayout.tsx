import CalBody from "./Calendar/Calbody";
import FormHeader from "./Form/FormHeader";
import UserForm from "./Form/UserForm";
import "../../CSS_pages/Form.css";


/* The `AppLayout` function is a React functional component that defines the layout of the application.
Inside the function, it returns JSX elements that represent the structure of the application layout.
In this case, it includes a `CalBody` component, a `FormHeader` component, and a `UserForm`
component wrapped inside a `div` element with specific styling classes. The components are arranged
in a flex layout with specific positioning and styling properties applied to create the desired
layout for the application. */
function AppLayout() {
  return (
    <div className=" relative justify-center left-[20%] size-[60%] top-[50%] flex gap-5  p-5 bg-slate-200 rounded-md flex-col sm:flex-row ">
      <CalBody />
      <div className=" relative flex flex-col justify-center items-center  sm:h-auto">
        <FormHeader />
        <UserForm />
      </div>
    </div>
  );
}

export default AppLayout;