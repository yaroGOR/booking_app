import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/userStore";

const constructQuery = ({
  username = "",
  firstname = "",
  lastname = "",
  ageStart = "",
  ageEnd = "",
  registrationStart = "",
  registrationEnd = "",
  interests = "",
}) => {
  let query = "";
  let paramNumber = 1;
  let operator;

  const concatValue = (property, value) => {
    if (paramNumber === 1) {
      operator = "?";
    } else {
      operator = "&";
    }
    paramNumber += 1;

    query += operator + property + "=" + value;
    console.log(query);
  };

  if (username !== "") {
    concatValue("username", username);
  }
  if (firstname !== "") {
    concatValue("firstname", firstname);
  }
  if (lastname !== "") {
    concatValue("lastname", lastname);
  }
  if (ageStart !== "") {
    concatValue("agestart", ageStart);
  }
  if (ageEnd !== "") {
    concatValue("agename", username);
  }
  if (registrationStart !== "") {
    concatValue("registrationstart", username);
  }
  if (registrationEnd !== "") {
    concatValue("registrationend", username);
  }
  if (interests) {
    console.log(interests);
    let interestsQuery = interests.join(",");
    console.log(interestsQuery);
    concatValue("interests", interestsQuery);
  }
  console.log(query);
  return query;
};
const SearchUser = () => {
  const interests = ["swimming", "running"];

  const dispatch = useDispatch();
  const sendData = (user) => {
    console.log("user", user);
    const query = constructQuery(user);
    console.log("query", query);
    axios.get("http://localhost:4020/user" + query).then((res) => {
      dispatch(getData(res.data));
    });
  };
  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(event.target.elements.username.value)
  // }
  const onSubmit = (data) => sendData(data);
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1> Search User</h1>
      <div>
        <label className="formLabel" htmlFor="username">Username</label>
        <input {...register("username")} id="username" type="text" />
      </div>
      <div>
        <label  htmlFor="firstname">Firstname</label>
        <input {...register("firstname")} id="firstname" type="text" />
      </div>
      <div>
        <label htmlFor="lastname">Lastname</label>
        <input {...register("lastname")} id="lastname" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register("email")} id="email" type="email" />
      </div>

      <div>
        <label htmlFor="birthdaystart">Birthday start</label>
        <input {...register("ageStart")} id="birthdaystart" type="date" />
      </div>
      <div>
        <label htmlFor="birthdayend">Birthday end</label>
        <input {...register("ageEnd")} id="birthdayend" type="date" />
      </div>
      {interests.map((interest, index) => {
        return (
          <div key={index}>
            <label htmlFor={interest}>{interest}</label>
            <input
              {...register("interests")}
              id={interest}
              type="checkbox"
              value={interest}
            />
          </div>
        );
      })}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchUser;
