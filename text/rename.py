import os
import re

def rename_files_to_10s():
    # 1. ファイル一覧を取得してソート
    files = [f for f in os.listdir('.') if os.path.isfile(f) and f.endswith('.txt')]
    # 数値部分を考慮した自然順でソート（059_1, 059_2のような並びを維持）
    files.sort()

    if not files:
        print("対象の.txtファイルが見つかりません。")
        return

    plan = []
    # 2. リネーム計画の作成
    for i, filename in enumerate(files):
        new_num = i * 10
        # 元のファイル名から「数字_」以降の部分を抽出
        match = re.search(r'^\d+_(.*)$', filename)
        if match:
            rest = match.group(1)
            new_name = f"{new_num:03d}_{rest}"
        else:
            # 数字で始まらないファイルも、一応10刻みのルールに乗せる
            new_name = f"{new_num:03d}_{filename}"
        
        plan.append((filename, new_name))

    # 3. 実行前の確認表示
    print("以下の通りにリネームします:")
    for old, new in plan:
        print(f"  {old}  ->  {new}")
    
    confirm = input("\n実行してよろしいですか？ (y/n): ")
    if confirm.lower() != 'y':
        print("キャンセルしました。")
        return

    # 4. 実行（衝突を避けるため、一時的な名前を経由するか逆順で処理）
    # 今回は単純に10倍に広がるので、基本的には衝突しません
    for old, new in plan:
        try:
            os.rename(old, new)
            print(f"完了: {old} -> {new}")
        except Exception as e:
            print(f"エラー: {old} の変更に失敗しました。 {e}")

if __name__ == "__main__":
    rename_files_to_10s()