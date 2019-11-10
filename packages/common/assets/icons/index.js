// @flow
const React = require('react');

const AlertSVG = require('./alert.svg');
const CalendarSVG = require('./calendar.svg');
const ClockSVG = require('./clock.svg');
const CloseSVG = require('./close.svg');
const CloseErrorSVG = require('./close-error.svg');
const CloseInactiveSVG = require('./close-inactive.svg');
const CheckSmallSVG = require('./check-small.svg');
const ChevronDownSVG = require('./chevron-down.svg');
const ChevronUpSVG = require('./chevron-up.svg');
const CreateOutboundsSVG = require('./create-outbounds.svg');
const DamagedPackageSVG = require('./damaged-package.svg');
const DeleteSVG = require('./delete.svg');
const DispatchReadyForFinishSVG = require('./dispatch-ready-for-finish.svg');
const DockSVG = require('./dock.svg');
const DockSmallSVG = require('./dock-small.svg');
const EditSmallSVG = require('./edit-small.svg');
const EditSmallInactiveSVG = require('./edit-small-inactive.svg');
const ExportSVG = require('./export.svg');
const InfoStatusSVG = require('./status_icons/statusInfo.svg');
const EmptyHuSVG = require('./empty-hu.svg');
const ErrorSVG = require('./error.svg');
const FailSVG = require('./fail.svg');
const FiltersSVG = require('./filters.svg');
const HomeSVG = require('./home.svg');
const InformationSVG = require('./information.svg');
const KeyboardSVG = require('./keyboard.svg');
const KeySVG = require('./key.svg');
const LabelDevolutionSVG = require('./label-devolution.svg');
const LabelSmallSVG = require('./label-small.svg');
const LabelSVG = require('./labeling.svg');
const LeftCaretSVG = require('./left-caret.svg');
const LogoutActiveSVG = require('./logout-active.svg');
const LogoutSVG = require('./logout.svg');
const ManualInputMethodSVG = require('./manual-input-method.svg');
const NpymFull = require('./npym-full.svg');
const OutboundCreateSVG = require('./outbound-create.svg');
const OpenSVG = require('./open.svg');
const PackageSVG = require('./package.svg');
const PackageApprovedSVG = require('./package-approved.svg');
const PalletSVG = require('./pallet.svg');
const PalletYellowSVG = require('./pallet-yellow.svg');
const PaSmallSVG = require('./pa-small.svg');
const PdfSVG = require('./pdf.svg');
const PrinterSmallSVG = require('./printer-small.svg');
const PrinterSVG = require('./printer.svg');
const QRScanSVG = require('./qr-scan.svg');
const QrTruckSVG = require('./qr-truck.svg');
const RejectedSVG = require('./rejected.svg');
const RejectedShipmentSVG = require('./rejected-shipment.svg');
const RightArrowSVG = require('./right-arrow.svg');
const SearchSVG = require('./search.svg');
const SearchLightSVG = require('./search-light.svg');
const SorterSymbolSVG = require('./sorter-symbol.svg');
const SuccessSmallSVG = require('./success-small.svg');
const SuccessSVG = require('./success.svg');
const TableSVG = require('./table.svg');
const TruckSVG = require('./truck.svg');
const TruckAlertSVG = require('./truck-alert.svg');
const UserActiveSVG = require('./user-active.svg');
const UserHeaderSVG = require('./user-header.svg');
const UserSVG = require('./user.svg');
const WarningSVG = require('./warning.svg');
const WorkstationSVG = require('./workstation.svg');
const ZplSVG = require('./zpl.svg');
const RadioDefault = require('./radio-default.svg');
const RadioSelected = require('./radio-selected.svg');

/* Module Icons */
const DevolutionCreateSVG = require('./truck-devolution.svg');
const DevolutionPalletSVG = require('./pallet-devolution.svg');
const DevolutionPackageSVG = require('./package-devolution.svg');
const GenericModuleSVG = require('./generic-module.svg');
const InboundSVG = require('./inbound.svg');
const OutboundSVG = require('./outbound.svg');
const PackagesSVG = require('./outbound-labeling.svg');
const PalletFullSVG = require('./pallet-full.svg');

/* Menu Items Icons */
const DashboardSVG = require('./menu/dashboard');
const OperationsSVG = require('./menu/operations');
const OutboundsListSVG = require('./menu/outbounds_list');
const PackagesListSVG = require('./menu/packages_list');
const PrintsListSVG = require('./menu/prints_list');
const SettingsSVG = require('./menu/settings');
const UsersListSVG = require('./menu/users_list');

/* Status Icons */
const FailStatusSVG = require('./status_icons/statusFail.svg');
const SuccessStatusSVG = require('./status_icons/statusSuccess.svg');

/* Custom Icons */
const CaretLeft = <i className="badge-icon__caret badge-icon__caret--left" />;
const CaretRight = <i className="badge-icon__caret badge-icon__caret--right" />;
const Back = (
  <button className="badge-icon__back">
    <span className="badge-icon__back-arrow" />
    <span className="badge-icon__back-line" />
  </button>
);
const Plus = (
  <button className="badge-icon__plus">
    <span className="badge-icon__plus-vertical-bar" />
    <span className="badge-icon__plus-horizontal-bar" />
  </button>
);

/* Carrier Icons */
let AndreaniImg;
let AzulCargoImg;
let CevaImg;
let CorasaImg;
let CorreiosImg;
let DhlImg;
let JadLogisticaLtdaImg;
let LatamCargoImg;
let LoggiImg;
let MercadoEnviosImg;
let MotonorteImg;
let OcaImg;
let OcasaImg;
let PacImg;
let PlimorImg;
let PuntoHopImg;
let SedexImg;
let TotalExpressImg;
let TransfolhaImg;
let UrbanoImg;
let WebpackImg;

if (true) {
  /* eslint-disable global-require */
  AndreaniImg = require('./carriers/andreani.png');
  AzulCargoImg = require('./carriers/azulcargo.png');
  CevaImg = require('./carriers/ceva.png');
  CorasaImg = require('./carriers/corasa.png');
  CorreiosImg = require('./carriers/correios.png');
  DhlImg = require('./carriers/dhl.png');
  JadLogisticaLtdaImg = require('./carriers/jadlogisticaltda.png');
  LatamCargoImg = require('./carriers/latamcargo.png');
  LoggiImg = require('./carriers/loggi.png');
  MercadoEnviosImg = require('./carriers/mercadoenvios.png');
  MotonorteImg = require('./carriers/motonorte.png');
  OcaImg = require('./carriers/oca.png');
  OcasaImg = require('./carriers/ocasa.png');
  PacImg = require('./carriers/pac.png');
  PlimorImg = require('./carriers/plimor.png');
  PuntoHopImg = require('./carriers/punto-hop.png');
  SedexImg = require('./carriers/sedex.png');
  TotalExpressImg = require('./carriers/totalexpress.png');
  TransfolhaImg = require('./carriers/transfolha.png');
  UrbanoImg = require('./carriers/urbano.png');
  WebpackImg = require('./carriers/webpack.png');
  /* eslint-enable global-require */
}

const Andreani = () => <img src={AndreaniImg} alt="Andreani" />;
const AzulCargo = () => <img src={AzulCargoImg} alt="AzulCargo" />;
const Ceva = () => <img src={CevaImg} alt="Ceva" />;
const Corasa = () => <img src={CorasaImg} alt="CorreoArgentino" />;
const Correios = () => <img src={CorreiosImg} alt="Correios" />;
const Dhl = () => <img src={DhlImg} alt="DHL" />;
const JadLogisticaLtda = () => <img src={JadLogisticaLtdaImg} alt="JadLogisticaLtda" />;
const LatamCargo = () => <img src={LatamCargoImg} alt="LatamCargo" />;
const Loggi = () => <img src={LoggiImg} alt="Loggi" />;
const MercadoEnvios = () => <img src={MercadoEnviosImg} alt="MercadoEnvios" />;
const Motonorte = () => <img src={MotonorteImg} alt="Motonorte" />;
const Oca = () => <img src={OcaImg} alt="Oca" />;
const Ocasa = () => <img src={OcasaImg} alt="Ocasa" />;
const Pac = () => <img src={PacImg} alt="PAC" />;
const Plimor = () => <img src={PlimorImg} alt="Plimor" />;
const PuntoHop = () => <img src={PuntoHopImg} alt="Hop" />;
const Sedex = () => <img src={SedexImg} alt="Sedex" />;
const TotalExpress = () => <img src={TotalExpressImg} alt="TotalExpress" />;
const Transfolha = () => <img src={TransfolhaImg} alt="Transfolha" />;
const Urbano = () => <img src={UrbanoImg} alt="Urbano" />;
const Webpack = () => <img src={WebpackImg} alt="Webpack" />;

const ICONS = {
  ALERT: <AlertSVG />,
  ARROW_RIGHT: <RightArrowSVG />,
  BACK: Back,
  CALENDAR: <CalendarSVG />,
  CARET_LEFT: <LeftCaretSVG />,
  CARET_LEFT_BLUE: CaretLeft,
  CARET_RIGHT: CaretRight,
  CARRIERS: {
    ANDREANI: <Andreani />,
    AZULCARGO: <AzulCargo />,
    CEVA: <Ceva />,
    CORASA: <Corasa />,
    CORREIOS: <Correios />,
    DHL: <Dhl />,
    JADLOGISTICALTDA: <JadLogisticaLtda />,
    LATAMCARGO: <LatamCargo />,
    LOGGI: <Loggi />,
    MERCADOENVIOS: <MercadoEnvios />,
    MOTONORTE: <Motonorte />,
    OCA: <Oca />,
    OCASA: <Ocasa />,
    PAC: <Pac />,
    PLIMOR: <Plimor />,
    PUNTOHOP: <PuntoHop />,
    SEDEX: <Sedex />,
    TOTALEXPRESS: <TotalExpress />,
    TRANSFOLHA: <Transfolha />,
    URBANO: <Urbano />,
    WEBPACK: <Webpack />,
  },
  CHECK_SMALL: <CheckSmallSVG />,
  CHEVRON_DOWN: <ChevronDownSVG />,
  CHEVRON_UP: <ChevronUpSVG />,
  CLOCK: <ClockSVG />,
  CLOSE: <CloseSVG />,
  CLOSE_ERROR: <CloseErrorSVG />,
  DAMAGED_PACKAGE: <DamagedPackageSVG />,
  DELETE: <DeleteSVG />,
  DISPATCH_READY_FOR_FINISH: <DispatchReadyForFinishSVG />,
  DOCK: <DockSVG />,
  DOCK_SMALL: <DockSmallSVG />,
  CLOSE_INACTIVE: <CloseInactiveSVG />,
  EDIT_SMALL: <EditSmallSVG />,
  EDIT_SMALL_INACTIVE: <EditSmallInactiveSVG />,
  EXPORT: <ExportSVG />,
  EMPTY_HU: <EmptyHuSVG />,
  ERROR: <ErrorSVG />,
  FAIL: <FailSVG />,
  FILTERS: <FiltersSVG />,
  HOME: <HomeSVG />,
  INFORMATION: <InformationSVG />,
  INFOSTATUS: <InfoStatusSVG />,
  KEY: <KeySVG />,
  KEYBOARD: <KeyboardSVG />,
  LABEL: <LabelSVG />,
  LABEL_SMALL: <LabelSmallSVG />,
  LABEL_DEVOLUTION: <LabelDevolutionSVG />,
  LOGOUT: <LogoutSVG />,
  LOGOUT_ACTIVE: <LogoutActiveSVG />,
  MANUAL_INPUT: <ManualInputMethodSVG />,
  MENU: {
    DASHBOARD: DashboardSVG,
    OPERATIONS: OperationsSVG,
    OUTBOUNDS_LIST: OutboundsListSVG,
    PACKAGES_LIST: PackagesListSVG,
    PRINTS_LIST: PrintsListSVG,
    SETTINGS: SettingsSVG,
    USERS_LIST: UsersListSVG,
  },
  MODULES: {
    DEVOLUTION_CREATE: <DevolutionCreateSVG />,
    DEVOLUTION_CLOSE: <DevolutionPalletSVG />,
    DEVOLUTION_DISPATCH: <DevolutionPackageSVG />,
    GENERIC: <GenericModuleSVG />,
    INBOUNDS: <InboundSVG />,
    LABELING: <LabelSVG />,
    OUTBOUNDS_CREATE: <CreateOutboundsSVG />,
    OUTBOUNDS_CLOSE: <PackagesSVG />,
    OUTBOUNDS_DISPATCH: <OutboundSVG />,
    USERS: <UserSVG />,
  },
  NPYM_FULL: <NpymFull />,
  OUTBOUND_CREATE: <OutboundCreateSVG />,
  OPEN: <OpenSVG />,
  PACKAGE: <PackageSVG />,
  PACKAGE_APPROVED: <PackageApprovedSVG />,
  PALLET: <PalletSVG />,
  PALLET_YELLOW: <PalletYellowSVG />,
  PA_SMALL: <PaSmallSVG />,
  PALLET_FULL: <PalletFullSVG />,
  PDF: <PdfSVG />,
  PLUS: Plus,
  PRINTER: <PrinterSVG />,
  PRINTER_SMALL: <PrinterSmallSVG />,
  QRCODE_TRUCK: <QrTruckSVG />,
  QR_SCAN: <QRScanSVG />,
  REJECTED: <RejectedSVG />,
  REJECTED_SHIPMENT: <RejectedShipmentSVG />,
  RADIO_DEFAULT: <RadioDefault />,
  RADIO_SELECTED: <RadioSelected />,
  SEARCH: <SearchSVG />,
  SEARCH_LIGHT: <SearchLightSVG />,
  SORTER_SYMBOL: <SorterSymbolSVG />,
  SUCCESS: <SuccessSVG />,
  SUCCESS_SMALL: <SuccessSmallSVG />,
  TABLE: <TableSVG />,
  TRUCK: <TruckSVG />,
  TRUCK_ALERT: <TruckAlertSVG />,
  USER: <UserSVG />,
  USER_ACTIVE: <UserActiveSVG />,
  USER_HEADER: <UserHeaderSVG />,
  WORKSTATION: <WorkstationSVG />,
  WARNING: <WarningSVG />,
  ZPL: <ZplSVG />,
};

const STATUS_ICONS = {
  FAIL: <FailStatusSVG />,
  SUCCESS: <SuccessStatusSVG />,
};

module.exports = {
  ICONS,
  STATUS_ICONS,
};
