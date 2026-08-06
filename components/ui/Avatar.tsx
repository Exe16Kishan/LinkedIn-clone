interface AvatarProps {
  src: string;
  className?: string;
  alt?: string;
}

function Avatar({
  src,
  className = "",
  alt = "Avatar",
}: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
}

export default Avatar;