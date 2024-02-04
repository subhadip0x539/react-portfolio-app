import { IIconProps } from "../../../../types/proptypes";

export function OpenInNew(props: IIconProps) {
  const { fill, size, className } = props;

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill={fill || "currentColor"}
      className={className}
    >
      <path d="M16.5 0C15.8953 0 15.3469 0.365625 15.1125 0.928125C14.8781 1.49062 15.0094 2.13281 15.4359 2.56406L17.3766 4.5L9.44062 12.4406C8.85469 13.0266 8.85469 13.9781 9.44062 14.5641C10.0266 15.15 10.9781 15.15 11.5641 14.5641L19.5 6.62344L21.4406 8.56406C21.8719 8.99531 22.5141 9.12188 23.0766 8.8875C23.6391 8.65313 24.0047 8.10938 24.0047 7.5V1.5C24.0047 0.670312 23.3344 0 22.5047 0H16.5ZM3.75 1.5C1.67812 1.5 0 3.17812 0 5.25V20.25C0 22.3219 1.67812 24 3.75 24H18.75C20.8219 24 22.5 22.3219 22.5 20.25V15C22.5 14.1703 21.8297 13.5 21 13.5C20.1703 13.5 19.5 14.1703 19.5 15V20.25C19.5 20.6625 19.1625 21 18.75 21H3.75C3.3375 21 3 20.6625 3 20.25V5.25C3 4.8375 3.3375 4.5 3.75 4.5H9C9.82969 4.5 10.5 3.82969 10.5 3C10.5 2.17031 9.82969 1.5 9 1.5H3.75Z" />
    </svg>
  );
}
