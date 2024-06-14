import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const EditProfile = () => {
  const imageBBKay = "2a04289f8de4ecc549faa2a3787890a5";
  const { user, loading } = useAuth();
  const [userInfoDb, setUserInfoDb] = useState(null);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    profession: "",
    presentAddress: "",
    permanentAddress: "",
    dateOfBirth: "",
    image: "",
    gender: "",
  });

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserInfoDb(data);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  useEffect(() => {
    if (userInfoDb) {
      setProfile({
        name: userInfoDb.name || "",
        email: userInfoDb.email || "",
        phoneNumber: userInfoDb.phoneNumber || "",
        profession: userInfoDb.profession || "",
        presentAddress: userInfoDb.presentAddress || "",
        permanentAddress: userInfoDb.permanentAddress || "",
        dateOfBirth: userInfoDb.dateOfBirth || "",
        image: "",
        gender: userInfoDb.gender || "",
      });
    }
  }, [userInfoDb]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageBBKay}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        setProfile({ ...profile, image: imageData.data.url });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log(profile);
    fetch(`http://localhost:3000/users/${user?.email}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    // Reset form fields after submission
    setProfile({
      name: "",
      email: "",
      phoneNumber: "",
      profession: "",
      presentAddress: "",
      permanentAddress: "",
      dateOfBirth: "",
      image: "",
      gender: "",
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-20">
      <div className="w-full max-w-2xl p-8  rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex w-full gap-x-4">
            <div className="w-1/2">
              <label htmlFor="username" className="block font-medium">
                Username
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.username}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-spacing-x-20 border-black-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex w-full gap-x-4">
            <div className="w-1/2">
              <label htmlFor="phoneNumber" className="block font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="profession" className="block font-medium">
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={profile.profession}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="presentAddress" className="block font-medium">
              Present Address
            </label>
            <input
              type="text"
              id="presentAddress"
              name="presentAddress"
              value={profile.presentAddress}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="permanentAddress" className="block font-medium">
              Permanent Address
            </label>
            <input
              type="text"
              id="permanentAddress"
              name="permanentAddress"
              value={profile.permanentAddress}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full flex gap-x-4">
            <div className="w-1/2">
              <label htmlFor="dateOfBirth" className="block font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={profile.dateOfBirth}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="image" className="block font-medium">
                Profile Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="gender" className="block font-medium">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
