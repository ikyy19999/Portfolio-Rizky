import React from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const ButtonContent = ({
  label,
  icon,
}) => (
  <>
    <span className="ax-button-label">
      {label}
    </span>

    {icon && (
      <span
        className="material-symbols-rounded ax-button-icon"
        aria-hidden="true"
      >
        {icon}
      </span>
    )}
  </>
);

ButtonContent.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

const getButtonClasses = (
  variant,
  classes,
) =>
  [
    "ax-button",
    `ax-button-${variant}`,
    classes,
  ]
    .filter(Boolean)
    .join(" ");

const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  type = "button",
}) => {
  const handleAction = () => {
    Swal.fire({
      title: "CV maintenance",
      text: "I am currently updating my CV. Please come back later.",
      icon: "info",
      confirmButtonText: "Got it",
      buttonsStyling: false,
      heightAuto: false,
      customClass: {
        container: "ax-swal-container",
        popup: "ax-swal-popup",
        icon: "ax-swal-icon",
        title: "ax-swal-title",
        htmlContainer: "ax-swal-content",
        confirmButton: "ax-swal-confirm",
      },
      showClass: {
        popup: "ax-swal-enter",
      },
      hideClass: {
        popup: "ax-swal-leave",
      },
    });
  };

  return (
    <button
      type={type}
      onClick={handleAction}
      data-href={href || undefined}
      data-target={target}
      className={getButtonClasses(
        "primary",
        classes,
      )}
    >
      <ButtonContent
        label={label}
        icon={icon}
      />
    </button>
  );
};

const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  type = "button",
}) => {
  const buttonClasses = getButtonClasses(
    "outline",
    classes,
  );

  const content = (
    <ButtonContent
      label={label}
      icon={icon}
    />
  );

  if (href) {
    const isExternal =
      target === "_blank" ||
      href.startsWith("http://") ||
      href.startsWith("https://");

    return (
      <a
        href={href}
        target={target}
        rel={
          isExternal
            ? "noopener noreferrer"
            : undefined
        }
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
    >
      {content}
    </button>
  );
};

const sharedPropTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
  type: PropTypes.oneOf([
    "button",
    "submit",
    "reset",
  ]),
};

ButtonPrimary.propTypes =
  sharedPropTypes;

ButtonOutline.propTypes =
  sharedPropTypes;

export {
  ButtonPrimary,
  ButtonOutline,
};