import { Form, useNavigation } from "react-router-dom";
import SearchFormWrapper from "./SearchForm";

function SearchForm({searchTerm}) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <SearchFormWrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          id="search"
          className="form-input"
          defaultValue={searchTerm}
        />

        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Searching" : "Search"}
        </button>
      </Form>
    </SearchFormWrapper>
  );
}

export default SearchForm;
