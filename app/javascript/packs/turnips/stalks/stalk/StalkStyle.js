import styled from "styled-components";
import { Row } from "react-bootstrap";

export const StalkRow = styled(Row)`
  background: #fdfef1;
  border-radius: 25px;
  padding: 10px 0;
  margin: 7px 0;
  font-size: 1.25em;

  cursor: pointer;

  ${(props) =>
    props.active
      ? ` background: repeating-linear-gradient(
      -45deg,
      #b0e9c5,
      #b0e9c5 15px,
      #c4efd4 15px,
      #c4efd4 30px
    );`
      : ``};

  &:hover {
    background: repeating-linear-gradient(
      -45deg,
      #b0e9c5,
      #b0e9c5 15px,
      #c4efd4 15px,
      #c4efd4 30px
    );
  }
`;
