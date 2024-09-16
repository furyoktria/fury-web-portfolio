function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
	@@ -26,7 +12,7 @@ export default function Footer() {
            target="_blank"
            href="https://x.com/furyoktria"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Fury-Twitter</p>
          </a>
        </li>
	@@ -37,7 +23,7 @@ export default function Footer() {
            target="_blank"
            href="https://www.linkedin.com/in/furyoktria/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Fury-LinkedIn</p>
          </a>
        </li>
