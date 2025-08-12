import scss from './header.module.scss';

export function Header() {
  return (
    <article className={`container ${scss.titleContainer}`}>
      <div className={scss.titleLine} />
      <h1 className={scss.title}>Исторические даты</h1>
    </article>
  );
}
