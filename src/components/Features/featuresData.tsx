import { BatchScanning } from './components/BatchScanning';
import { SignStamp } from './components/SignStamp';
import { AdvancedFilters } from './components/AdvancedFilters';
import { ExportShare } from './components/ExportShare';

import { DocumentIcon } from './icons/DocumentIcon';
import { CertifiedIcon } from './icons/CertifiedIcon';
import { ScannerIcon } from './icons/ScannerIcon';
import { FilterIcon } from './icons/FilterIcon';
import { ExportIcon } from './icons/ExportIcon';

import { IFeature } from './Features.type';

export const featuresData: IFeature[] = [
  {
    frame: '/features/document-scanner/frame.png',
    icon: <DocumentIcon />,
    label: 'Document Scanner',
    title: 'Scan with Ease',
    desc: 'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
  },
  {
    frame: '/features/sign-stamp/frame.png',
    showcase: <SignStamp />,
    icon: <CertifiedIcon />,
    label: 'Sign & Stamp',
    title: 'One-Tap Focus',
    desc: 'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
  },
  {
    frame: '/features/batch-scanning/frame.png',
    showcase: <BatchScanning />,
    icon: <ScannerIcon />,
    label: 'Batch Scanning',
    title: 'Multiple Page Scan',
    desc: 'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
  },
  {
    frame: '/features/advanced-filters/frame.png',
    showcase: <AdvancedFilters />,
    icon: <FilterIcon />,
    label: 'Advanced Filters',
    title: 'Unique Filters',
    desc: 'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.    ',
  },
  {
    frame: '/features/export-share/frame.png',
    showcase: <ExportShare />,
    icon: <ExportIcon />,
    label: 'Export & Share',
    title: 'All-Round Conversion',
    desc: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
  },
];
