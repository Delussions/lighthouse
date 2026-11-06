import i0 from '../../ui/icons/axe.webp'
import i1 from '../../ui/icons/backpack.webp'
import i2 from '../../ui/icons/bench.webp'
import i3 from '../../ui/icons/block.webp'
import i4 from '../../ui/icons/bonfire.webp'
import i5 from '../../ui/icons/clear.webp'
import i6 from '../../ui/icons/coin.webp'
import i7 from '../../ui/icons/controls.webp'
import i8 from '../../ui/icons/cooked_bream.webp'
import i9 from '../../ui/icons/cooked_lantern.webp'
import i10 from '../../ui/icons/cooked_mackerel.webp'
import i11 from '../../ui/icons/cooked_moonfish.webp'
import i12 from '../../ui/icons/cooked_parrot.webp'
import i13 from '../../ui/icons/cooked_puffer.webp'
import i14 from '../../ui/icons/cooked_sardine.webp'
import i15 from '../../ui/icons/cooked_snapper.webp'
import i16 from '../../ui/icons/dawn.webp'
import i17 from '../../ui/icons/day.webp'
import i18 from '../../ui/icons/fish_bream.webp'
import i19 from '../../ui/icons/fish_lantern.webp'
import i20 from '../../ui/icons/fish_mackerel.webp'
import i21 from '../../ui/icons/fish_moonfish.webp'
import i22 from '../../ui/icons/fish_parrot.webp'
import i23 from '../../ui/icons/fish_puffer.webp'
import i24 from '../../ui/icons/fish_sardine.webp'
import i25 from '../../ui/icons/fish_snapper.webp'
import i26 from '../../ui/icons/gil.webp'
import i27 from '../../ui/icons/hunger.webp'
import i28 from '../../ui/icons/lighthouse.webp'
import i29 from '../../ui/icons/lighthouse@512.webp'
import i30 from '../../ui/icons/lower.webp'
import i31 from '../../ui/icons/menu.webp'
import i32 from '../../ui/icons/music.webp'
import i33 from '../../ui/icons/muted.webp'
import i34 from '../../ui/icons/night.webp'
import i35 from '../../ui/icons/palm.webp'
import i36 from '../../ui/icons/photo.webp'
import i37 from '../../ui/icons/pickaxe.webp'
import i38 from '../../ui/icons/raise.webp'
import i39 from '../../ui/icons/redo.webp'
import i40 from '../../ui/icons/request.webp'
import i41 from '../../ui/icons/rod.webp'
import i42 from '../../ui/icons/shovel.webp'
import i43 from '../../ui/icons/sound.webp'
import i44 from '../../ui/icons/stone.webp'
import i45 from '../../ui/icons/sunset.webp'
import i46 from '../../ui/icons/undo.webp'
import i47 from '../../ui/icons/wood.webp'

const svgIcon = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

const iLantern = svgIcon(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <circle cx="32" cy="30" r="24" fill="#FFE28A" opacity="0.35"/>
    <path d="M26 10h12l4 6H22z" fill="#5C4433" stroke="#2C2018" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M29 6h6v4h-6z" fill="#8A6642" stroke="#2C2018" stroke-width="2.2" stroke-linejoin="round"/>
    <rect x="23" y="16" width="18" height="24" rx="4" fill="#FFF3B0" stroke="#2C2018" stroke-width="2.5"/>
    <circle cx="32" cy="28" r="6" fill="#FFB830"/>
    <path d="M22 40h20l-3 6H25z" fill="#5C4433" stroke="#2C2018" stroke-width="2.5" stroke-linejoin="round"/>
    <rect x="29" y="46" width="6" height="12" rx="2" fill="#9E6B43" stroke="#2C2018" stroke-width="2.5"/>
  </svg>`
)

const iCrabTrap = svgIcon(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <circle cx="32" cy="11" r="6" fill="#E85A4F" stroke="#2C2018" stroke-width="2.4"/>
    <path d="M26 11h12" stroke="#FFF8EC" stroke-width="2.5"/>
    <path d="M32 17v7" stroke="#D9C39E" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="12" y="24" width="40" height="26" rx="5" fill="#C88B52" stroke="#2C2018" stroke-width="2.6"/>
    <path d="M20 24v26M28 24v26M36 24v26M44 24v26M12 33h40M12 42h40" stroke="#7A4E28" stroke-width="2.4"/>
    <circle cx="27" cy="38" r="3" fill="#E85A4F"/>
    <circle cx="37" cy="38" r="3" fill="#E85A4F"/>
  </svg>`
)

const iPlanter = svgIcon(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <circle cx="24" cy="24" r="11" fill="#56B849" stroke="#2C2018" stroke-width="2.5"/>
    <circle cx="40" cy="25" r="10" fill="#469E3B" stroke="#2C2018" stroke-width="2.5"/>
    <circle cx="32" cy="18" r="11" fill="#72CF5E" stroke="#2C2018" stroke-width="2.5"/>
    <circle cx="25" cy="21" r="3.5" fill="#FF5E5B" stroke="#2C2018" stroke-width="1.5"/>
    <circle cx="37" cy="17" r="3.5" fill="#FFB830" stroke="#2C2018" stroke-width="1.5"/>
    <circle cx="39" cy="27" r="3.5" fill="#FF5E5B" stroke="#2C2018" stroke-width="1.5"/>
    <path d="M14 34h36l-4 20H18z" fill="#B87A44" stroke="#2C2018" stroke-width="2.6" stroke-linejoin="round"/>
    <rect x="11" y="31" width="42" height="6" rx="2.5" fill="#D4955A" stroke="#2C2018" stroke-width="2.5"/>
  </svg>`
)

const iSeat = svgIcon(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect x="12" y="18" width="40" height="8" rx="3" fill="#D99B5E" stroke="#2C2018" stroke-width="2.5"/>
    <rect x="12" y="28" width="40" height="7" rx="2.5" fill="#C4864B" stroke="#2C2018" stroke-width="2.5"/>
    <rect x="8" y="35" width="48" height="8" rx="3" fill="#E6AD70" stroke="#2C2018" stroke-width="2.6"/>
    <rect x="13" y="43" width="6" height="13" rx="2" fill="#7D5233" stroke="#2C2018" stroke-width="2.4"/>
    <rect x="45" y="43" width="6" height="13" rx="2" fill="#7D5233" stroke="#2C2018" stroke-width="2.4"/>
  </svg>`
)

const icons: Record<string, string> = {
  axe: i0,
  backpack: i1,
  bench: i2,
  block: i3,
  bonfire: i4,
  clear: i5,
  coin: i6,
  controls: i7,
  cooked_bream: i8,
  cooked_lantern: i9,
  cooked_mackerel: i10,
  cooked_moonfish: i11,
  cooked_parrot: i12,
  cooked_puffer: i13,
  cooked_sardine: i14,
  cooked_snapper: i15,
  dawn: i16,
  day: i17,
  fish_bream: i18,
  fish_lantern: i19,
  fish_mackerel: i20,
  fish_moonfish: i21,
  fish_parrot: i22,
  fish_puffer: i23,
  fish_sardine: i24,
  fish_snapper: i25,
  gil: i26,
  hunger: i27,
  lighthouse: i28,
  'lighthouse@512': i29,
  lower: i30,
  menu: i31,
  music: i32,
  muted: i33,
  night: i34,
  palm: i35,
  photo: i36,
  pickaxe: i37,
  raise: i38,
  redo: i39,
  request: i40,
  rod: i41,
  shovel: i42,
  sound: i43,
  stone: i44,
  sunset: i45,
  undo: i46,
  wood: i47,
  lantern: iLantern,
  crab_trap: iCrabTrap,
  planter: iPlanter,
  seat: iSeat,
}

export default icons
