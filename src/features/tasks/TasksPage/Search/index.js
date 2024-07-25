import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamsName from "../searchQueryParamsName";

export default () => {
  const query = useQueryParameter(searchQueryParamsName);
  const ReplaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {

    ReplaceQueryParameter({
      key: searchQueryParamsName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

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
