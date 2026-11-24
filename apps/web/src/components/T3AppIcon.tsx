import appIconUrl from "../../../../assets/agent-desk/icon-180.png";

export function T3AppIcon(props: { readonly className?: string }) {
  return <img src={appIconUrl} alt="" className={props.className} />;
}
