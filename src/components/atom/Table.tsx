import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Loading from "react-loading";
import Input from "components/atom/Input";

export interface TableColumn<T> {
  field: keyof T;
  headerName: string;
  width?: number;
  flex?: number;
  cellRenderer?: (value: T) => React.JSX.Element;
}

interface IProps<T> {
  isLoading?: boolean;
  columns: TableColumn<T>[];
  rows: T[];
  height?: number;
  onClickRow?: (value: T) => void;
  onCheck?: (value: T[]) => void;
  checkBox?: boolean;
}

export default function Table<T>({ isLoading, columns, rows, height, onClickRow, onCheck, checkBox }: IProps<T>) {
  // STATE
  const [checked, setChecked] = useState<number[]>([]);

  // CALLBACK
  const onAllCheckClick = useCallback(() => {
    let result: number[];
    if (rows.length === checked.length) {
      result = [];
    } else {
      result = rows.map((v, index) => index);
    }

    onCheck && onCheck(rows.filter((v, index) => result.includes(index)));
    setChecked(result);
  }, [checked]);

  const onCheckClick = useCallback(
    (value: boolean, index: number) => {
      let result: number[];
      if (value) {
        result = [...checked, index].sort();
      } else {
        result = checked.filter((v) => v !== index).sort();
      }

      onCheck && onCheck(rows.filter((v, index) => result.includes(index)));
      setChecked(result);
    },
    [checked],
  );

  return (
    <s.Table $height={height}>
      <s.TableHeaderRow>
        {checkBox && (
          <s.TableHeader key="checkBox" $width={20}>
            <Input type="checkbox" checked={rows.length === checked.length} onChange={onAllCheckClick} />
          </s.TableHeader>
        )}
        {columns.map(({ field, width, flex, headerName }) => (
          <s.TableHeader key={field.toString()} $width={width} $flex={flex}>
            {headerName}
          </s.TableHeader>
        ))}
      </s.TableHeaderRow>
      <s.TableDataRows>
        {isLoading && (
          <s.LoadingBox>
            <Loading type="bubbles" color="var(--text)" />
          </s.LoadingBox>
        )}
        {rows.map((row, key) => (
          <s.TableDataRow key={key} onClick={() => onClickRow && onClickRow(row)} $hover={onClickRow !== undefined}>
            {checkBox && (
              <s.TableData key={`${key}_checkBox`} $width={20}>
                <Input
                  type="checkbox"
                  checked={checked.includes(key)}
                  onChange={(value) => onCheckClick(value as boolean, key)}
                />
              </s.TableData>
            )}
            {columns.map(({ field, flex, width, cellRenderer }) => (
              <s.TableData key={`${key}_${field.toString()}`} $width={width} $flex={flex}>
                {cellRenderer ? cellRenderer(row) : (row[field] as string)}
              </s.TableData>
            ))}
          </s.TableDataRow>
        ))}
      </s.TableDataRows>
    </s.Table>
  );
}

const s = {
  Table: styled.div<{ $height?: number }>`
    display: flex;
    flex-direction: column;

    border: 1px solid var(--bg-700);
    border-radius: 6px;
    overflow: hidden;

    height: ${({ $height }) => ($height !== undefined ? `${$height}px` : "100%")};
  `,
  TableHeader: styled.div<{ $width?: number; $flex?: number }>`
    flex: ${({ $flex }) => $flex};

    width: ${({ $width }) => $width ?? 100}px;

    padding: 16px 18px;

    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
  `,
  TableHeaderRow: styled.div`
    display: flex;

    border-bottom: 1px solid var(--bg-700);
  `,
  TableData: styled.div<{ $width?: number; $flex?: number }>`
    flex: ${({ $flex }) => $flex};

    width: ${({ $width }) => $width ?? 100}px;

    padding: 16px 18px;

    overflow: hidden;
    text-overflow: ellipsis;
  `,
  TableDataRows: styled.div`
    height: 100%;
    min-height: 480px;
    overflow: auto;
  `,
  TableDataRow: styled.div<{ $hover: boolean }>`
    display: flex;

    border-bottom: 1px solid var(--bg-800);

    &:hover {
      background-color: var(--bg-800);
      ${({ $hover }) => ($hover ? "cursor: pointer" : "")}
    }
  `,
  LoadingBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
  `,
};
