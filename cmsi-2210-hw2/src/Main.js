export default function Main({ dogBreed, data }) {
  return (
    <div>
      {data ? (
        data.status === "error" ? (
          <img
            src={
              "https://st.depositphotos.com/2702761/3989/v/600/depositphotos_39898855-stock-illustration-puppy-with-404-error-message.jpg"
            }
            alt="404"
          />
        ) : (
          <img src={data.message} alt="dog" />
        )
      ) : (
        <img src={dogBreed} alt="dog" />
      )}
    </div>
  );
}
