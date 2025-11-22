function ProfileCard({ name, age, country, image }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        margin: "10px",
        width: "200px",
        borderRadius: "10px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
}

export default ProfileCard;
