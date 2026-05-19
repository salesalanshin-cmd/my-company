export {}

declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void
        LatLng: new (lat: number, lng: number) => KakaoLatLng
        Map: new (
          container: HTMLElement,
          options: { center: KakaoLatLng; level: number }
        ) => KakaoMap
        Marker: new (options: { position: KakaoLatLng }) => KakaoMarker
        InfoWindow: new (options: { content: string }) => KakaoInfoWindow
      }
    }
  }
}

interface KakaoLatLng {
  // Kakao Maps SDK marker type
}

interface KakaoMap {
  // Kakao Maps SDK map instance
}

interface KakaoMarker {
  setMap: (map: KakaoMap | null) => void
}

interface KakaoInfoWindow {
  open: (map: KakaoMap, marker: KakaoMarker) => void
}
