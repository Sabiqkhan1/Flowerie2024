import { ReactComponent as TransactionIcon } from '../../images/icons/Transaction.svg'
import { ReactComponent as PostIcon } from '../../images/icons/Post.svg'
import { ReactComponent as OrderIcon } from '../../images/icons/Order.svg'
import { ReactComponent as HelpIcon } from '../../images/icons/Help.svg'
import { ReactComponent as OfferIcon } from '../../images/icons/Offer.svg'
import { ReactComponent as PaymentIcon } from '../../images/icons/Payment.svg'
import { ReactComponent as ReferralIcon } from '../../images/icons/Referral.svg'
import { ReactComponent as AuditIcon } from '../../images/icons/Audit.svg'
import { ReactComponent as SettingIcon } from '../../images/icons/Setting.svg'

export const vendorLinks = [
    {
        label: 'Transactions',
        icon: <TransactionIcon />,
        to: '',
    },
    {
        label: 'Manage posts',
        icon: <PostIcon />,
        to: 'posts',
    },
    {
        label: 'Upcoming orders',
        icon: <OrderIcon />,
        to: 'orders',
    },
    {
        label: 'Help',
        icon: <HelpIcon />,
        to: 'help',
    },
    {
        label: 'Offers',
        icon: <OfferIcon />,
        to: 'offers',
    },
    {
        label: 'Payment plans',
        icon: <PaymentIcon />,
        to: 'payment',
    },
]

export const vendorSecondaryLinks = [
    {
        label: 'Referrals',
        icon: <ReferralIcon />,
        to: 'referrals',
    },
    {
        label: 'Audit logs',
        icon: <AuditIcon />,
        to: 'audit',
    },
    {
        label: 'Settings',
        icon: <SettingIcon />,
        to: 'settings',
    },
]
