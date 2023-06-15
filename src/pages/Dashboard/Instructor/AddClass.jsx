import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data) => {
      console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            className,
            instructorEmail,
            instructorName,
            price,
            availableSeats,
          } = data;
          const newClass = {
            className,
            price: parseFloat(price),
            instructorEmail,
            instructorName,
            availableSeats: parseInt(availableSeats),
            image: imgURL,
            status: "pending",
            feedback: "No feedback",
          };
          console.log(newClass);
          axiosSecure.post("/class", newClass).then((data) => {
            console.log("after posting new class", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New Class Added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Sports Club | Add Class</title>
      </Helmet>
      <h1 className="text-4xl text-center pb-2 my-text font-semibold mt-12">
        Add new Class
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("className", { required: true, maxLength: 120 })}
            className="input input-bordered w-full input-primary"
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Instructor name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              {...register("instructorName", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full input-primary"
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor email</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              {...register("instructorEmail", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full input-primary"
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Available Seats*</span>
            </label>
            <input
              type="number"
              {...register("availableSeats", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full input-primary"
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full input-primary"
            />
          </div>
        </div>

        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text font-semibold">Class Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full input-primary"
          />
        </div>
        <input
          className="btn btn mt-4 my-btn"
          type="submit"
          value="Add This Class"
        />
      </form>
    </div>
  );
};

export default AddClass;
