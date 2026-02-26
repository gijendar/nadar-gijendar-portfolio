import Time "mo:core/Time";
import List "mo:core/List";

actor {
  let messages = List.empty<ContactMessage>();

  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async () {
    let newMessage : ContactMessage = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    messages.add(newMessage);
  };

  public query ({ caller }) func getContactMessages() : async [ContactMessage] {
    messages.toArray();
  };
};
