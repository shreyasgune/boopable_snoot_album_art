let currentImageIndex = 0;
const images = [
    'IMG_20230725_085409_924_cropped.jpg',
    'IMG_20230725_085411_802_cropped.jpg',
    'IMG_20230725_085413_336_cropped.jpg',
    'IMG_20230727_093048_472_cropped.jpg',
    'IMG_20230728_100234_248_cropped.jpg',
    'IMG_20230729_100147_285_cropped.jpg',
    'IMG_20230730_111229_881_cropped.jpg',
    'IMG_20230806_093807_561_cropped.jpg',
    'IMG_20230807_064747_728_cropped.jpg',
    'IMG_20230808_070858_125_cropped.jpg',
    'IMG_20230810_222440_556_cropped.jpg',
    'IMG_20230813_203321_188_cropped.jpg',
    'IMG_20230817_083135_635_cropped.jpg',
    'IMG_20230822_093038_543_cropped.jpg',
    'IMG_20230823_080647_096_cropped.jpg',
    'IMG_20230914_064316_077_cropped.jpg',
    'IMG_20230917_212352_124_cropped.jpg',
    'IMG_20230922_170517_365_cropped.jpg',
    'IMG_20230923_074139_059_cropped.jpg',
    'IMG_20230924_093625_605_cropped.jpg',
    'IMG_20230925_071328_303_cropped.jpg',
    'IMG_20230926_080540_805_cropped.jpg',
    'IMG_20230927_070614_739_cropped.jpg',
    'IMG_20230928_072644_668_cropped.jpg',
    'IMG_20230929_092051_631_cropped.jpg',
    'IMG_20231001_095209_582_cropped.jpg',
    'IMG_20231002_070454_972_cropped.jpg',
    'IMG_20231004_075142_185_cropped.jpg',
    'IMG_20231005_093618_659_cropped.jpg',
    'IMG_20231006_094318_224_cropped.jpg',
    'IMG_20231007_094550_162_cropped.jpg',
    'IMG_20231008_094711_819_cropped.jpg',
    'IMG_20231009_073849_061_cropped.jpg',
    'IMG_20231010_075216_173_cropped.jpg',
    'IMG_20231011_071629_858_cropped.jpg',
    'IMG_20231012_075107_944_cropped.jpg',
    'IMG_20231013_072245_815_cropped.jpg',
    'IMG_20231014_071829_176_cropped.jpg',
    'IMG_20231015_064337_045_cropped.jpg',
    'IMG_20231016_065728_668_cropped.jpg',
    'IMG_20231017_083814_185_cropped.jpg',
    'IMG_20231018_083115_208_cropped.jpg',
    'IMG_20231019_081541_416_cropped.jpg',
    'IMG_20231020_062859_538_cropped.jpg',
    'IMG_20231021_080146_658_cropped.jpg',
    'IMG_20231022_090623_847_cropped.jpg',
    'IMG_20231023_070251_286_cropped.jpg',
    'IMG_20231024_095307_301_cropped.jpg',
    'IMG_20231025_091934_656_cropped.jpg',
    'IMG_20231026_075900_902_cropped.jpg',
    'IMG_20231027_092002_357_cropped.jpg',
    'IMG_20231028_095933_152_cropped.jpg',
    'IMG_20231030_084843_772_cropped.jpg',
    'IMG_20231031_082350_922_cropped.jpg',
    'IMG_20231101_081249_853_cropped.jpg',
    'IMG_20231102_091732_594_cropped.jpg',
    'IMG_20231103_072858_045_cropped.jpg',
    'IMG_20231104_065507_292_cropped.jpg',
    'IMG_20231105_070414_192_cropped.jpg',
    'IMG_20231106_072124_051_cropped.jpg',
    'IMG_20231107_065457_987_cropped.jpg',
    'IMG_20231108_070245_210_cropped.jpg',
    'IMG_20231109_074447_616_cropped.jpg',
    'IMG_20231110_073753_768_cropped.jpg',
    'IMG_20231111_092709_715_cropped.jpg',
    'IMG_20231112_091439_705_cropped.jpg',
    'IMG_20231113_071402_123_cropped.jpg',
    'IMG_20231114_072121_124_cropped.jpg',
    'IMG_20231115_071258_725_cropped.jpg',
    'IMG_20231116_070501_646_cropped.jpg',
    'IMG_20231117_071816_384_cropped.jpg',
    'IMG_20231119_081507_195_cropped.jpg',
    'IMG_20231123_111007_676_cropped.jpg',
    'IMG_20231215_105751_368_cropped.jpg',
    'IMG_20231219_164807_613_cropped.jpg'
];

function showImage(index) {
    const imageDisplay = document.getElementById('image-display');
    imageDisplay.src = 'images/' + images[index];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

// Show the first image initially
showImage(currentImageIndex);



