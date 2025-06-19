import React from "react";

function FormComponent({ data, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={data.firstName}
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={data.lastName}
        onChange={handleChange}
      />
      <br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={data.age}
        onChange={handleChange}
      />
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={data.gender === "male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={data.gender === "female"}
          onChange={handleChange}
        />
        Female
      </label>
      <br />

      <label>
        Destination:
        <select
          name="destination"
          value={data.destination}
          onChange={handleChange}
        >
          <option value="">--Please choose a destination--</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="Germany">Germany</option>
        </select>
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={data.lactoseFree}
          onChange={handleChange}
        />
        Lactose Free?
      </label>
      <br />

      <button type="submit">Submit</button>
      <hr />

      <h2>Entered Information:</h2>
      <p>Name: {data.firstName} {data.lastName}</p>
      <p>Age: {data.age}</p>
      <p>Gender: {data.gender}</p>
      <p>Destination: {data.destination}</p>
      <p>Lactose Free: {data.lactoseFree ? "Yes" : "No"}</p>
    </form>
  );
}

export default FormComponent;
