import 'server-only';

export {
  sendMarkaInquiry,
  sendMarkaEvent,
  getMarkaConfig,
  verifyMarkaOutboundSignature,
  fetchMarkaPortalData,
  type MarkaInquirySyncStatus,
  type MarkaConfig,
  type MarkaSendResult,
} from '@/lib/marka-crm';
