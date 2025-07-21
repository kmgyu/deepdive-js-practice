import { News } from '@/components/EffectExample';
import { Counter } from '@/components/StateExample';
import { FocusInput, CountTracker } from '@/components/RefExample';
import { TodoList } from '@/components/ReducerExample';

export default function HookExamples() {
    return (
    <>
    <News/>

    <Counter />

    <FocusInput/>

    <CountTracker/>

    <TodoList />
    </>
    );
}