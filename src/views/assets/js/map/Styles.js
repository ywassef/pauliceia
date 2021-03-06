const placeStyle = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'https://openlayers.org/en/v4.4.2/examples/data/icon.png'
  }))
})

const streetsStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: 'blue',
    width: 3
  })
})

const emptyStyle = new ol.style.Style({
  display: 'none'
})

export {
  placeStyle,
  streetsStyle,
  emptyStyle
}
