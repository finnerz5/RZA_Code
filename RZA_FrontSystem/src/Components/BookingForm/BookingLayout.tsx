import CalBody from "./Calendar/Calbody";
import FormHeader from "./Form/FormHeader";
import UserForm from "./Form/UserForm";
import "../../CSS_pages/Form.css";


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