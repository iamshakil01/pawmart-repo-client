import { useContext } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const AddListing = () => {

    const { user } = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name: e.target.name.value,
            category: e.target.category.value,
            price: e.target.price.value,
            description: e.target.description.value,
            image: e.target.image.value,
            location: e.target.location.value,
            created_at: new Date(),
            downloads: 0,
            created_by: user.email
        }

        fetch('https://pawmart-server-five.vercel.app/pets-supplies', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Successfully added!")
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })


    }


    return (
        <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl mt-30">
            <div className="card-body p-6 relative">
                <h2 className="text-2xl font-bold text-center mb-6">Add New List</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="label font-medium">Products/Pet Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter name"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="label font-medium">Category</label>
                        <select
                            defaultValue={""}
                            name="category"
                            required
                            className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                        >
                            <option value="" disabled>
                                Select category
                            </option>
                            <option value="Adoption">Adoption</option>
                            <option value="Pet Foods">Pet Foods</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Pet Care Products">Pet Care Products</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="label font-medium">Price</label>
                        <input
                            type="text"
                            name="price"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="0"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="label font-medium">Description</label>
                        <textarea
                            name="description"
                            required
                            rows=""
                            className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[25px]"
                            placeholder="Enter description"
                        ></textarea>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="label font-medium">Image URL</label>
                        <input
                            type="url"
                            name="image"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Earliest Pick-Up/Availability Date</span></label>
                        <input type="date" name="pickupDate" className="input input-bordered w-full" required />
                    </div>

                    {/* Location */}

                    <div>
                        <label className="label font-medium">Location</label>
                        <input
                            type="text"
                            name="location"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Dhaka, Bangladesh"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contact Email (Your Account Email)</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={user.email} // Dynamic value from AuthContext
                            className="input input-bordered w-full input-info bg-info-content/10 rounded-full" // Added a slight background for visual cue
                            readOnly
                        />
                        <label className="label">
                            <span className="label-text-alt text-info">This field is read-only and uses your authenticated email.</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
                    >
                        Submit List
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddListing;