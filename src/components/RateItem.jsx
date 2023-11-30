export default function RateItem({
  selectedStar,
  hoveredStar,
  handleOnMouseEnter,
  handleOnClick,
}) {
  const filledStar = <>&#9733;</>;

  return (
    <span
      style={{
        color: selectedStar
          ? "orange"
          : hoveredStar
          ? "rgb(254,232,5)"
          : "rgb(204,204,204)",
        cursor: "pointer",
      }}
      onClick={handleOnClick}
      onMouseEnter={handleOnMouseEnter}
    >
      {filledStar}
    </span>
  );
}
