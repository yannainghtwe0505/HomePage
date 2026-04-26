/** External recruitment portal (official CMC channel). */
export const ENGAGE_RECRUIT_URL = 'https://en-gage.net/cmc-a/'

export const CONTACT_EMAIL = 'info@cmc-a.co.jp'

export const OFFICE = {
  postal: '〒104-0061',
  lines: ['Tokyo, Chuo-ku, Ginza 4-10-10', 'Ginza Sanno Building 3F'],
  jaLines: ['東京都中央区銀座4-10-10', '銀座山王ビル3階'],
  tel: '03-3544-0644',
  fax: '03-3544-0645',
  telFree: '0120-550-454',
  hours: '9:00–19:00 (weekdays)',
} as const

/** Google Maps embed (no API key) — query pins Ginza Sanno Building area. */
export const MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=Ginza+Sanno+Building+4-10-10+Ginza+Chuo+Tokyo&z=17&output=embed'
