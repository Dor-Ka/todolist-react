// import { useHistory, useLocation } from "react-router-dom";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamsName from "../searchQueryParamsName";

export default () => {
  // const location = useLocation();
  // const history = useHistory();
  // const query = new URLSearchParams(location.search).get(searchQueryParamsName);

  const query = useQueryParameter(searchQueryParamsName);
  const ReplaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    // const searchParams = new URLSearchParams(location.search);

    ReplaceQueryParameter({
      key: searchQueryParamsName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };
  //   if (target.value.trim() === "") {
  //     searchParams.delete(searchQueryParamsName);
  //   } else {
  //     searchParams.set(searchQueryParamsName, target.value);
  //   }

  //   history.push(`${location.pathname}?${searchParams.toString()}`);
  // };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
