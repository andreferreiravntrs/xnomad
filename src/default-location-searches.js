import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-stockholm',
    predictionPlace: {
      address: 'Stockholm, Sverige',
      bounds: new LatLngBounds(new LatLng(59.37635, 18.16491), new LatLng(59.27098, 17.96716)),
    },
  },
  {
    id: 'default-norrmalm',
    predictionPlace: {
      address: 'Norrmalm, Stockholm',
      bounds: new LatLngBounds(new LatLng(59.33963612, 18.08058717), new LatLng(59.3272034, 18.05314996)),
    },
  },
  {
    id: 'default-vasastan',
    predictionPlace: {
      address: 'Vasastan, Stockholm',
      bounds: new LatLngBounds(new LatLng(59.355998, 18.064983799999936), new LatLng(59.33544999999999, 18.024109899999985)),
    },
  },
  {
    id: 'default-kungsholmen',
    predictionPlace: {
      address: 'Kungsholmen, Stockholm',
      bounds: new LatLngBounds(new LatLng(59.34187499999999, 18.058842099999993), new LatLng(59.3144181, 17.97664800000007)),
    },
  },
  {
    id: 'default-sodermalm',
    predictionPlace: {
      address: 'Södermalm, Stockholm',
      bounds: new LatLngBounds(new LatLng(59.3292439, 18.112072099999978), new LatLng(59.299264, 18.01119600000004)),
    },
  },
];
