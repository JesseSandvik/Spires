

export default function classNames(classNameToBoolean) {
    return Object.entries(classNameToBoolean)
      .reduce(
        (classes, [className, value]) =>
          classes.concat(value ? className : undefined),
        []
      )
      .filter((className) => className !== undefined)
      .join(" ");
  }