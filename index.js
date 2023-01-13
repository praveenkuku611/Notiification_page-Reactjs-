const Notification = (props) => {
  const { imageUrl, text, className1 } = props;
  return (
    <div className={className1}>
      <div>
        <img src={imageUrl} />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <Notification
      imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      text="Information Message"
      className1="list-container1"
    />
    <Notification
      imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      text="Success Message"
      className1="list-container2"
    />
    <Notification
      imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      text="Warning Message"
      className1="list-container3"
    />
    <Notification
      imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      text="Danger Message"
      className1="list-container4"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
