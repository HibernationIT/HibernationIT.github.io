import styles from './emojiBlock.module.scss'

interface IProps {
  emoji: Emoji
}

export default function EmojiBlock({ emoji }: IProps) {
  return <div className={styles.emoji}>{emoji.emoji}</div>
}
