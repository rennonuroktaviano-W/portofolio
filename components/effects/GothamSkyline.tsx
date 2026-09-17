const BACK = "#0b0e16";
const FRONT = "#06070c";
const LIT = "rgba(230,184,74,0.85)";


function WindowGrid({
  x,
  y,
  width,
  floors,
  cols,
  color = LIT,
  twinkle = false,
}: {
  x: number;
  y: number;
  width: number;
  floors: number;
  cols: number;
  color?: string;
  twinkle?: boolean;
}) {
  const stepX = width / cols;
  const rects = [];
  for (let r = 0; r < floors; r++) {
    for (let c = 0; c < cols; c++) {
      rects.push(
        <rect
          key={`${r}-${c}`}
          x={x + c * stepX + stepX * 0.3}
          y={y + r * 11}
          width={2.6}
          height={4}
          rx={0.6}
          fill={color}
        />
      );
    }
  }
  return <g className={twinkle ? "window-twinkle" : undefined}>{rects}</g>;
}

function BackSkyline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-x-0 bottom-0 h-full w-full"
    >
      <circle cx="1090" cy="250" r="52" fill="rgba(230,184,74,0.07)" />
      <g fill={BACK}>
        <rect x="0" y="700" width="70" height="200" />
        <polygon points="40,900 40,560 95,430 150,560 150,900" />
        <rect x="44" y="540" width="12" height="20" fill="#1a2030" />
        <path d="M150,900 L150,640 Q210,560 270,640 L270,900 Z" />
        <rect x="150" y="628" width="120" height="12" fill="#131827" />
        <rect x="204" y="540" width="12" height="30" fill="#131827" />
        <rect x="290" y="600" width="90" height="300" />
        <rect x="305" y="530" width="60" height="70" />
        <rect x="320" y="470" width="30" height="60" />
        <rect x="400" y="640" width="100" height="260" />
        <rect x="418" y="600" width="64" height="40" />
        <polygon points="500,900 500,540 545,450 590,540 590,900" />
        <polygon points="600,900 600,570 645,500 690,570 690,900" />
        <rect x="710" y="520" width="18" height="380" />
        <rect x="742" y="480" width="18" height="420" />
        <rect x="710" y="700" width="14" height="4" />
        <rect x="756" y="700" width="14" height="4" />
        <rect x="790" y="680" width="80" height="220" />
        <rect x="790" y="668" width="80" height="12" fill="#131827" />
        <rect x="890" y="560" width="70" height="340" />
        <rect x="905" y="500" width="40" height="60" />
        <rect x="918" y="420" width="14" height="80" />
        <rect x="920" y="320" width="6" height="100" />
        <polygon points="980,900 980,520 1040,380 1100,520 1100,900" />
        <polygon points="1130,900 1130,480 1180,400 1230,480 1230,900" />
        <polygon points="1260,900 1260,430 1310,340 1360,430 1360,900" />
        <path d="M1390,900 L1390,610 Q1420,560 1440,600 L1440,900 Z" />
      </g>
    </svg>
  );
}

function FrontSkyline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-x-0 bottom-0 h-full w-full"
    >
      <g fill={FRONT}>
        <rect x="0" y="720" width="150" height="180" />
        <rect x="0" y="712" width="150" height="8" fill="#0d1018" />
        <rect x="170" y="650" width="130" height="250" />
        <rect x="170" y="642" width="130" height="8" fill="#0d1018" />
        <WindowGrid x={182} y={665} width={106} floors={12} cols={10} twinkle />
        <rect x="320" y="520" width="90" height="380" />
        <rect x="338" y="440" width="54" height="80" />
        <rect x="352" y="360" width="26" height="80" />
        <WindowGrid x={334} y={545} width={62} floors={10} cols={6} twinkle />
        <rect x="430" y="600" width="110" height="300" />
        <rect x="448" y="572" width="74" height="28" fill="#0d1018" />
        <WindowGrid x={446} y={640} width={78} floors={8} cols={8} twinkle />
        <rect x="560" y="540" width="20" height="360" />
        <rect x="592" y="500" width="20" height="400" />
        <rect x="560" y="740" width="14" height="4" />
        <rect x="598" y="740" width="14" height="4" />
        <rect x="640" y="480" width="150" height="420" />
        <rect x="658" y="420" width="114" height="60" />
        <rect x="676" y="370" width="78" height="50" />
        <rect x="690" y="330" width="50" height="40" />
        <WindowGrid x={658} y={520} width={114} floors={14} cols={11} twinkle />
        <polygon points="810,900 810,540 870,420 930,540 930,900" />
        <WindowGrid x={826} y={590} width={88} floors={9} cols={9} twinkle />
        <rect x="950" y="560" width="120" height="340" />
        <rect x="985" y="490" width="50" height="70" />
        <path d="M985,490 Q1010,455 1035,490 Z" />
        <WindowGrid x={968} y={600} width={84} floors={8} cols={8} twinkle />
        <rect x="1090" y="700" width="110" height="200" />
        <rect x="1090" y="688" width="110" height="12" fill="#0d1018" />
        <rect x="1220" y="540" width="90" height="360" />
        <rect x="1246" y="470" width="38" height="70" />
        <path d="M1246,470 Q1265,432 1284,470 Z" />
        <WindowGrid x={1234} y={565} width={62} floors={9} cols={6} twinkle />
        <rect x="1330" y="600" width="110" height="300" />
        <rect x="1348" y="540" width="74" height="60" />
        <rect x="1366" y="470" width="38" height="70" />
        <rect x="1378" y="400" width="6" height="70" />
        <WindowGrid x={1350} y={640} width={70} floors={7} cols={7} twinkle />
      </g>
      <g>
        {[
          { x: 435, y: 268 },
          { x: 862, y: 250 },
          { x: 1400, y: 320 },
        ].map((b) => (
          <circle
            key={b.x}
            cx={b.x}
            cy={b.y}
            r={2.2}
            fill={LIT}
            className="window-twinkle"
          />
        ))}
      </g>
    </svg>
  );
}

export function GothamSkyline() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="gotham-back absolute inset-0 opacity-70 will-change-transform">
        <BackSkyline />
      </div>
      <div className="gotham-front absolute inset-0 opacity-95 will-change-transform">
        <FrontSkyline />
      </div>
    </div>
  );
}