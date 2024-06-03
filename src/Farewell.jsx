import PropTypes from "prop-types";
import { calculateCoordinates } from "./helpers/calculateCoordinates";

/**
 * A simple farewell component.
 * @param {FarewellProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * // Example usage of Farewell component
 * <Farewell name="John" surname="Doe" />
 */
function Farewell({ name, surname, isDoctor }) {
  const doctorTag = isDoctor ? "Dr. " : "";
  const surnameElement = surname ? <h2>{surname}</h2> : null;

  calculateCoordinates(0, 0, 1);

  return (
    <>
      <h1>
        Bye, {doctorTag}
        {name}
        {` ${surnameElement}`}!
      </h1>
      <button onClick={() => calculateCoordinates(0, 0, 1)}>Calculate</button>
    </>
  );
}

// At build time, React will check that the props passed to the component match the types defined in the propTypes object.
// If the types don't match, React will log a warning to the console.
// Compiler Demo - !
Farewell.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  isDoctor: PropTypes.bool,
};

Farewell.defaultProps = {
  isDoctor: false,
};

export default Farewell;

// Cases in which you might want to use PropTypes:
// - You are using a library that doesn't have built-in TypeScript definitions.
// - You are incrementally migrating a JavaScript codebase to TypeScript.
// - You are working on a personal project and don't want to set up TypeScript.
