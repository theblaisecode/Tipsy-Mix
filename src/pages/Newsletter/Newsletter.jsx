import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import NewsletterWrapper from "./Newsletter.js";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Newsletter() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <NewsletterWrapper>
      <Form method="POST" className="form">
        <h4>Our Newsletter</h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-input"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            defaultValue="test@test.com"
            placeholder="Email Address"
            required
          />
        </div>

        <button type="submit" className="btn btn-lock" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>

        <h5>Note: Only test@test.com is allowed</h5>
      </Form>
    </NewsletterWrapper>
  );
}

export default Newsletter;
